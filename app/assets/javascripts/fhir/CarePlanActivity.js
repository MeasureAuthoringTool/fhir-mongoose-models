const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { BackboneElementSchema } = require('./BackboneElement');
const { CarePlanActivityDetailSchema } = require('./CarePlanActivityDetail');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CarePlanActivitySchema = BackboneElementSchemaFunction({
   outcomeCodeableConcept : [CodeableConceptSchema],
   outcomeReference : [ReferenceSchema],
   progress : [AnnotationSchema],
   reference : ReferenceSchema,
   detail : CarePlanActivityDetailSchema,
   fhirTitle: { type: String, default: 'CarePlanActivity' },
});

class CarePlanActivity extends mongoose.Document {
  constructor(object) {
    super(object, CarePlanActivitySchema);
    this._type = 'FHIR::CarePlanActivity';
  }
};


module.exports.CarePlanActivitySchema = CarePlanActivitySchema;
module.exports.CarePlanActivity = CarePlanActivity;
