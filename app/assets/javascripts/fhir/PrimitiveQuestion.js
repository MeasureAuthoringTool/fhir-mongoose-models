const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveQuestionSchema } = require('./allSchemaHeaders.js');

PrimitiveQuestionSchema.add(PrimitiveStringSchema);
PrimitiveQuestionSchema.remove('id');
PrimitiveQuestionSchema.add({
});

module.exports.PrimitiveQuestionSchema = PrimitiveQuestionSchema;
