const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AnnotationSchema } = require('./Annotation');
const { CarePlanActivitySchema } = require('./CarePlanActivity');
const { CarePlanIntentSchema } = require('./CarePlanIntent');
const { CarePlanStatusSchema } = require('./CarePlanStatus');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CarePlanSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   instantiatesCanonical : [String],
   instantiatesUri : [String],
   basedOn : [ReferenceSchema],
   replaces : [ReferenceSchema],
   partOf : [ReferenceSchema],
   status : CarePlanStatusSchema,
   intent : CarePlanIntentSchema,
   category : [CodeableConceptSchema],
   title : String,
   description : String,
   subject : ReferenceSchema,
   encounter : ReferenceSchema,
   period : PeriodSchema,
   created : DateTime,
   author : ReferenceSchema,
   contributor : [ReferenceSchema],
   careTeam : [ReferenceSchema],
   addresses : [ReferenceSchema],
   supportingInfo : [ReferenceSchema],
   goal : [ReferenceSchema],
   activity : [CarePlanActivitySchema],
   note : [AnnotationSchema],
   fhirTitle: { type: String, default: 'CarePlan' },
});

class CarePlan extends mongoose.Document {
  constructor(object) {
    super(object, CarePlanSchema);
    this._type = 'FHIR::CarePlan';
  }
};


module.exports.CarePlanSchema = CarePlanSchema;
module.exports.CarePlan = CarePlan;
