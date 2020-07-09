const { ElementSchema } = require('./Element');
const { QualityTypeSchema } = require('./allSchemaHeaders.js');

QualityTypeSchema.add(ElementSchema);
QualityTypeSchema.remove('id');
QualityTypeSchema.add({
  value: String,
});

module.exports.QualityTypeSchema = QualityTypeSchema;
