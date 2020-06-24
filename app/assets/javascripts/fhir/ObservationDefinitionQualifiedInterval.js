const mongoose = require('mongoose/browser');
const { AdministrativeGenderSchema } = require('./AdministrativeGender');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ObservationRangeCategorySchema } = require('./ObservationRangeCategory');
const { RangeSchema } = require('./Range');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ObservationDefinitionQualifiedIntervalSchema = BackboneElementSchemaFunction({
   category : ObservationRangeCategorySchema,
   range : RangeSchema,
   context : CodeableConceptSchema,
   appliesTo : [CodeableConceptSchema],
   gender : AdministrativeGenderSchema,
   age : RangeSchema,
   gestationalAge : RangeSchema,
   condition : String,
   fhirTitle: { type: String, default: 'ObservationDefinitionQualifiedInterval' },
});

class ObservationDefinitionQualifiedInterval extends mongoose.Document {
  constructor(object) {
    super(object, ObservationDefinitionQualifiedIntervalSchema);
    this._type = 'FHIR::ObservationDefinitionQualifiedInterval';
  }
};


module.exports.ObservationDefinitionQualifiedIntervalSchema = ObservationDefinitionQualifiedIntervalSchema;
module.exports.ObservationDefinitionQualifiedInterval = ObservationDefinitionQualifiedInterval;
