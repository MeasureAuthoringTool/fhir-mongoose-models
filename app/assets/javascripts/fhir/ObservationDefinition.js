const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { ObservationDataTypeSchema } = require('./ObservationDataType');
const { ObservationDefinitionQualifiedIntervalSchema } = require('./ObservationDefinitionQualifiedInterval');
const { ObservationDefinitionQuantitativeDetailsSchema } = require('./ObservationDefinitionQuantitativeDetails');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const ObservationDefinitionSchema = DomainResourceSchemaFunction({
  category: [CodeableConceptSchema],
  code: CodeableConceptSchema,
  identifier: [IdentifierSchema],
  permittedDataType: [ObservationDataTypeSchema],
  multipleResultsAllowed: PrimitiveBooleanSchema,
  method: CodeableConceptSchema,
  preferredReportName: PrimitiveStringSchema,
  quantitativeDetails: ObservationDefinitionQuantitativeDetailsSchema,
  qualifiedInterval: [ObservationDefinitionQualifiedIntervalSchema],
  validCodedValueSet: ReferenceSchema,
  normalCodedValueSet: ReferenceSchema,
  abnormalCodedValueSet: ReferenceSchema,
  criticalCodedValueSet: ReferenceSchema,
  typeName: { type: String, default: 'ObservationDefinition' },
  _type: { type: String, default: 'FHIR::ObservationDefinition' },
});

class ObservationDefinition extends mongoose.Document {
  constructor(object) {
    super(object, ObservationDefinitionSchema);
    this.typeName = 'ObservationDefinition';
    this._type = 'FHIR::ObservationDefinition';
  }
}

module.exports.ObservationDefinitionSchema = ObservationDefinitionSchema;
module.exports.ObservationDefinition = ObservationDefinition;
