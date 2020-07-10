const { ElementSchema } = require('./Element');
const { ResponseTypeSchema } = require('./allSchemaHeaders.js');

ResponseTypeSchema.add(ElementSchema);
ResponseTypeSchema.remove('id');
ResponseTypeSchema.add({
  value: String,
});

module.exports.ResponseTypeSchema = ResponseTypeSchema;
