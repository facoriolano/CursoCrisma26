import { GoogleGenAI, Type, Schema } from "@google/genai";
import { LessonContent, SyllabusItem } from "../types";

// NOTE: In a real production app, move API calls to a backend to protect the key.
// For this demo, we assume the environment variable is available.
const apiKey = process.env.API_KEY || ''; 

const ai = new GoogleGenAI({ apiKey });

const lessonSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    intro: { type: Type.STRING, description: "A one sentence engaging hook about the topic." },
    theory: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "Array of 3-4 short paragraphs explaining the theological topic for young people."
    },
    questions: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          question: { type: Type.STRING },
          options: { type: Type.ARRAY, items: { type: Type.STRING } },
          correctIndex: { type: Type.INTEGER },
          explanation: { type: Type.STRING }
        },
        required: ["question", "options", "correctIndex", "explanation"]
      },
      description: "A list of 5 to 10 multiple choice questions to test understanding."
    }
  },
  required: ["intro", "theory", "questions"]
};

export const generateLessonData = async (lesson: SyllabusItem): Promise<LessonContent> => {
  if (!apiKey) {
    throw new Error("API Key missing");
  }

  const isReview = lesson.isReview || lesson.isExam;
  
  const prompt = `
    You are a Catholic Youth Catechist creating content for a "Duolingo-style" Confirmation (Crisma) course.
    
    Topic: ${lesson.title}
    Scripture Reference: ${lesson.scripture}
    Description: ${lesson.description}
    Context: This is for teenagers (14-17 years old).

    ${lesson.isEvent ? 
      "This is an event placeholder. Just provide a motivational text about the importance of participating in church events and 3 simple questions about community." :
      `Create an engaging lesson. 
      1. Intro: A catchy hook.
      2. Theory: 3 to 4 distinct "slides" of content. Be concise, fun, but theologically accurate (Catechism of the Catholic Church). Use metaphors suitable for youth (references to pop culture like Simpsons are allowed if relevant to the topic).
      3. Questions: Generate ${isReview ? '15' : '8'} multiple choice questions. They should test the content just explained.
      `
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: lessonSchema,
        systemInstruction: "You are a helpful, energetic, and orthodox Catholic catechist.",
      }
    });

    const text = response.text;
    if (!text) throw new Error("No data returned");
    
    return JSON.parse(text) as LessonContent;

  } catch (error) {
    console.error("Gemini Error:", error);
    // Fallback content in case of API failure/quota limits
    return {
      intro: "Não foi possível carregar o conteúdo da IA agora.",
      theory: ["Verifique sua conexão ou tente novamente mais tarde.", "Leia a passagem bíblica indicada: " + lesson.scripture],
      questions: [
        {
          question: "Qual passagem devemos ler?",
          options: [lesson.scripture, "Gênesis 1", "Apocalipse"],
          correctIndex: 0,
          explanation: "O tema de hoje é baseado em " + lesson.scripture
        }
      ]
    };
  }
};
