const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { ObservationDataTypeSchema } = require('./ObservationDataType');
const { ObservationDefinitionQualifiedIntervalSchema } = require('./ObservationDefinitionQualifiedInterval');
const { ObservationDefinitionQuantitativeDetailsSchema } = require('./ObservationDefinitionQuantitativeDetails');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ObservationDefinitionSchema = DomainResourceSchemaFunction({
   category : [CodeableConceptSchema],
   code : CodeableConceptSchema,
   identifier : [IdentifierSchema],
   permittedDataType : [ObservationDataTypeSchema],
   multipleResultsAllowed : Boolean,
   method : CodeableConceptSchema,
   preferredReportName : String,
   quantitativeDetails : ObservationDefinitionQuantitativeDetailsSchema,
   qualifiedInterval : [ObservationDefinitionQualifiedIntervalSchema],
   validCodedValueSet : ReferenceSchema,
   normalCodedValueSet : ReferenceSchema,
   abnormalCodedValueSet : ReferenceSchema,
   criticalCodedValueSet : ReferenceSchema,
   fhirTitle: { type: String, default: 'ObservationDefinition' },
});

class ObservationDefinition extends mongoose.Document {
  constructor(object) {
    super(object, ObservationDefinitionSchema);
    this._type = 'FHIR::ObservationDefinition';
  }
};


module.exports.ObservationDefinitionSchema = ObservationDefinitionSchema;
module.exports.ObservationDefinition = ObservationDefinition;
