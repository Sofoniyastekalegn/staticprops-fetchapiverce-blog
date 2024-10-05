// forms
// React extends the HTML <form> element to allow Server Actions to be invoked with the action prop.

// When invoked in a form, the action automatically receives the FormData object. You don't need to use React useState to manage fields, instead, you can extract the data using the native FormData methods:

export default function Page() {
    async function createInvoice(formData: FormData) {
      'use server'
   
      const rawFormData = {
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
      }
   
      // mutate data
      // revalidate cache
    }
   
    return <form action={createInvoice}>...</form>
  }