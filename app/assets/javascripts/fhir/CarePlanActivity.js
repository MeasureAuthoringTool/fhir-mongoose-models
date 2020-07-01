const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CarePlanActivityDetailSchema } = require('./CarePlanActivityDetail');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');

const CarePlanActivitySchema = BackboneElementSchemaFunction({
  outcomeCodeableConcept: [CodeableConceptSchema],
  outcomeReference: [ReferenceSchema],
  progress: [AnnotationSchema],
  reference: ReferenceSchema,
  detail: CarePlanActivityDetailSchema,
  typeName: { type: String, default: 'CarePlanActivity' },
  _type: { type: String, default: 'FHIR::CarePlanActivity' },
});

class CarePlanActivity extends mongoose.Document {
  constructor(object) {
    super(object, CarePlanActivitySchema);
    this.typeName = 'CarePlanActivity';
    this._type = 'FHIR::CarePlanActivity';
  }
}

module.exports.CarePlanActivitySchema = CarePlanActivitySchema;
module.exports.CarePlanActivity = CarePlanActivity;
