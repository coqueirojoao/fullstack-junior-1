import { z, ZodError } from 'zod';
import Candidate from "../job/models/Candidate";

// Define o esquema de validação usando Zod
const CandidateSchema = z.object({
    name: z.string(),
    age: z.number().int().min(18).max(100),
    phone: z.string().regex(/^\d{10,11}$/),
    state: z.string(),
    city: z.string(),
});

// Validação do candidato
export default function validateCandidate(candidate: Candidate): { success: boolean, errors?: string[] } {
    try {
        if (!candidate) {
            return { success: false, errors: ['Candidate is empty'] };
        }
        
        CandidateSchema.parse(candidate);
        return { success: true };

        
    } catch (error) {
        if (error instanceof ZodError) {
            return { success: false, errors: error.errors.map((err) => {
                const fieldName = err.path.join('.');
                return `${fieldName}: ${err.message}`;      
            }) }
        }
    }
    
    return { success: false }
}
