// Programmatic form submission.
// You can trigger a form submission programmatically using the requestSubmit() method. For example, when the user submits a form using the ⌘ + Enter keyboard shortcut, you can listen for the onKeyDown event:

'use server'
 
import { z } from 'zod'
 
const schema = z.object({
  email: z.string({
    invalid_type_error: 'Invalid Email',
  }),
})
 
export default async function createUser(formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get('email'),
  })
 
  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
 
  // Mutate data
}