const { ElementSchema } = require('./Element');
const { CarePlanActivityKindSchema } = require('./allSchemaHeaders.js');

CarePlanActivityKindSchema.add(ElementSchema);
CarePlanActivityKindSchema.remove('id');
CarePlanActivityKindSchema.add({
  value: String,
});

module.exports.CarePlanActivityKindSchema = CarePlanActivityKindSchema;
