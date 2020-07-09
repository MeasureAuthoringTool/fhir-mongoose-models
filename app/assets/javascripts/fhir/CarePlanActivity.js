const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { CarePlanActivityDetailSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { CarePlanActivitySchema } = require('./allSchemaHeaders.js');

CarePlanActivitySchema.add(BackboneElementSchema);
CarePlanActivitySchema.remove('id');
CarePlanActivitySchema.add({
  outcomeCodeableConcept: [CodeableConceptSchema],
  outcomeReference: [ReferenceSchema],
  progress: [AnnotationSchema],
  reference: ReferenceSchema,
  detail: CarePlanActivityDetailSchema,
});

module.exports.CarePlanActivitySchema = CarePlanActivitySchema;
