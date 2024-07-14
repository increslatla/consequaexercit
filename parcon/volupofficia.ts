class Form {
    fields: string[];

    constructor(fields: string[]) {
        this.fields = fields;
    }

    getFormData(): { fields: string[] } {
        return {
            fields: this.fields
        };
    }
}

// Usage
const form = new Form(['name', 'email', 'password']);
const formData = form.getFormData();

console.log(formData);
// Output: { fields: ['name', 'email', 'password'] }
