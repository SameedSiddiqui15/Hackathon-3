export const Product = {
    name: "Product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: (rule) => 
                rule.required()
                    .max(100)
                    .error("Product name is required and cannot exceed 100 characters."),
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
            },
        },
        {
            name: "description",
            title: "Description",
            type: "text",
            validation: (rule) =>
                rule.required()
                    .max(500)
                    .error("Description is required and cannot exceed 500 characters."),
        },
        {
            name: "dimensions",
            title: "Dimensions (L x W x H)",
            type: "object",
            fields: [
                { name: "length", title: "Length (cm)", type: "number" },
                { name: "width", title: "Width (cm)", type: "number" },
                { name: "height", title: "Height (cm)", type: "number" },
            ],
        },
        {
            name: "weight",
            title: "Weight",
            type: "number",
            description: "Weight in kilograms (kg)",
        },
        {
            name: "material",
            title: "Material",
            type: "string",
            options: {
                list: [
                    { title: "Wood", value: "Wood" },
                    { title: "Metal", value: "Metal" },
                    { title: "Glass", value: "Glass" },
                    { title: "Plastic", value: "Plastic" },
                    { title: "Fabric", value: "Fabric" },
                    { title: "Leather", value: "Leather" },
                ],
            },
        },
        {
            name: "price",
            title: "Price",
            type: "number",
            validation: (rule) => 
                rule.required()
                    .min(1)
                    .error("Price must be a positive number."),
        },
        {
            name: "image",
            title: "Image",
            type: "image",
        },
        {
            name: "category",
            title: "Category",
            type: "reference",
            to: [{ type: "category" }],
        },
        {
            name: "color",
            title: "Color",
            type: "string",
            options: {
                list: [
                    { title: "Red", value: "Red" },
                    { title: "Blue", value: "Blue" },
                    { title: "Green", value: "Green" },
                    { title: "Black", value: "Black" },
                    { title: "White", value: "White" },
                    { title: "Grey", value: "Grey" },
                    { title: "Brown", value: "Brown" },
                    { title: "Natural", value: "Natural" },
                ],
            },
        },
        {
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "string" }],
        },
        {
            name: "warranty",
            title: "Warranty",
            type: "string",
            description: "Warranty information (e.g., 1 year, 2 years).",
        },
    ],
};
