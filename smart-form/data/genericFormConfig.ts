

const CONFIG = {

      heading: "Generic Form",
      sections: [
        {
          title: "Personal Info",
          description: "Please provide your personal details.",
          inputs: [
            { name: "firstName", type: "text", label: "First Name", placeholder: "Enter your first name", required: true },
            { name: "lastName", type: "text", label: "Last Name", placeholder: "Enter your last name", required: true },
            { name: "email", type: "email", label: "Email Address", placeholder: "Enter your email", required: true },
            { name: "phone", type: "tel", label: "Phone Number", placeholder: "Enter your phone number", required: false },
            { name: "dob", type: "date", label: "Date of Birth", placeholder: "Select your birth date", required: true },
            {
              name: "gender",
              type: "radio",
              label: "Gender",
              required: true,
              options: [
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
                { label: "Other", value: "other" },
              ],
            },
          ],
        },
        {
          title: "Address Details",
          description: "Provide your current residential address.",
          inputs: [
            { name: "address", type: "text", label: "Address", placeholder: "Enter your street address", required: true },
            { name: "city", type: "text", label: "City", placeholder: "Enter your city", required: true },
            { name: "state", type: "text", label: "State", placeholder: "Enter your state", required: true },
            { name: "zipCode", type: "text", label: "Zip Code", placeholder: "Enter your zip code", required: true },
            {
              name: "country",
              type: "select",
              label: "Country",
              required: true,
              options: [
                { label: "United States", value: "us" },
                { label: "Canada", value: "ca" },
                { label: "United Kingdom", value: "uk" },
                { label: "India", value: "in" },
                { label: "Australia", value: "au" },
              ],
            },
          ],
        },
        {
          title: "Account Settings",
          description: "Setup your login credentials.",
          inputs: [
            { name: "username", type: "text", label: "Username", placeholder: "Choose a username", required: true },
            { name: "password", type: "password", label: "Password", placeholder: "Enter your password", required: true },
            { name: "confirmPassword", type: "password", label: "Confirm Password", placeholder: "Re-enter your password", required: true },
          ],
        },
        {
          title: "Preferences",
          description: "Select your preferences.",
          inputs: [
            { name: "newsletter", type: "checkbox", label: "Subscribe to Newsletter", required: false },
            {
              name: "theme",
              type: "select",
              label: "Preferred Theme",
              required: true,
              options: [
                { label: "Light", value: "light" },
                { label: "Dark", value: "dark" },
              ],
            },
          ],
        },
      ],

  } as const;

  export default CONFIG
  export type GenericFormConfigType = typeof CONFIG
  