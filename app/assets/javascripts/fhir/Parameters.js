const { ParametersParameterSchema } = require('./allSchemaHeaders.js');
const { ResourceSchema } = require('./Resource');
const { ParametersSchema } = require('./allSchemaHeaders.js');

ParametersSchema.add(ResourceSchema);
ParametersSchema.remove('id');
ParametersSchema.add({
  parameter: [ParametersParameterSchema],
});

module.exports.ParametersSchema = ParametersSchema;
