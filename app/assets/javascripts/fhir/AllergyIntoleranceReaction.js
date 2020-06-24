const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AllergyIntoleranceSeveritySchema } = require('./AllergyIntoleranceSeverity');
const { AnnotationSchema } = require('./Annotation');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const AllergyIntoleranceReactionSchema = BackboneElementSchemaFunction({
   substance : CodeableConceptSchema,
   manifestation : [CodeableConceptSchema],
   description : String,
   onset : DateTime,
   severity : AllergyIntoleranceSeveritySchema,
   exposureRoute : CodeableConceptSchema,
   note : [AnnotationSchema],
   fhirTitle: { type: String, default: 'AllergyIntoleranceReaction' },
});

class AllergyIntoleranceReaction extends mongoose.Document {
  constructor(object) {
    super(object, AllergyIntoleranceReactionSchema);
    this._type = 'FHIR::AllergyIntoleranceReaction';
  }
};


module.exports.AllergyIntoleranceReactionSchema = AllergyIntoleranceReactionSchema;
module.exports.AllergyIntoleranceReaction = AllergyIntoleranceReaction;
