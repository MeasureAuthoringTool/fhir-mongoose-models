const { ElementSchema } = require('./Element');
const { CarePlanIntentSchema } = require('./allSchemaHeaders.js');

CarePlanIntentSchema.add(ElementSchema);
CarePlanIntentSchema.remove('id');
CarePlanIntentSchema.add({
  value: String,
});

module.exports.CarePlanIntentSchema = CarePlanIntentSchema;
