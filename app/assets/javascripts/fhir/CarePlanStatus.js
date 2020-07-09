const { ElementSchema } = require('./Element');
const { CarePlanStatusSchema } = require('./allSchemaHeaders.js');

CarePlanStatusSchema.add(ElementSchema);
CarePlanStatusSchema.remove('id');
CarePlanStatusSchema.add({
  value: String,
});

module.exports.CarePlanStatusSchema = CarePlanStatusSchema;
