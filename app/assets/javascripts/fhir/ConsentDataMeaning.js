const { ElementSchema } = require('./Element');
const { ConsentDataMeaningSchema } = require('./allSchemaHeaders.js');

ConsentDataMeaningSchema.add(ElementSchema);
ConsentDataMeaningSchema.remove('id');
ConsentDataMeaningSchema.add({
  value: String,
});

module.exports.ConsentDataMeaningSchema = ConsentDataMeaningSchema;
