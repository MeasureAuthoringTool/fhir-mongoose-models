const { ElementSchema } = require('./Element');
const { CarePlanActivityStatusSchema } = require('./allSchemaHeaders.js');

CarePlanActivityStatusSchema.add(ElementSchema);
CarePlanActivityStatusSchema.remove('id');
CarePlanActivityStatusSchema.add({
  value: String,
});

module.exports.CarePlanActivityStatusSchema = CarePlanActivityStatusSchema;
