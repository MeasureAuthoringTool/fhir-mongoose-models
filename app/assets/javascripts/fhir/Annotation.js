const { ElementSchema } = require('./Element');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { AnnotationSchema } = require('./allSchemaHeaders.js');

AnnotationSchema.add(ElementSchema);
AnnotationSchema.remove('id');
AnnotationSchema.add({
  authorReference: ReferenceSchema,
  authorString: PrimitiveStringSchema,
  time: PrimitiveDateTimeSchema,
  text: PrimitiveMarkdownSchema,
});

module.exports.AnnotationSchema = AnnotationSchema;
