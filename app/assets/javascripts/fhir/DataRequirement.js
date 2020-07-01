const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DataRequirementCodeFilterSchema } = require('./DataRequirementCodeFilter');
const { DataRequirementDateFilterSchema } = require('./DataRequirementDateFilter');
const { DataRequirementSortSchema } = require('./DataRequirementSort');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { FHIRAllTypesSchema } = require('./FHIRAllTypes');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const DataRequirementSchema = ElementSchemaFunction({
  type: FHIRAllTypesSchema,
  profile: [PrimitiveCanonicalSchema],
  subjectCodeableConcept: CodeableConceptSchema,
  subjectReference: ReferenceSchema,
  mustSupport: [PrimitiveStringSchema],
  codeFilter: [DataRequirementCodeFilterSchema],
  dateFilter: [DataRequirementDateFilterSchema],
  limit: PrimitivePositiveIntSchema,
  sort: [DataRequirementSortSchema],
  typeName: { type: String, default: 'DataRequirement' },
  _type: { type: String, default: 'FHIR::DataRequirement' },
});

class DataRequirement extends mongoose.Document {
  constructor(object) {
    super(object, DataRequirementSchema);
    this.typeName = 'DataRequirement';
    this._type = 'FHIR::DataRequirement';
  }
}

module.exports.DataRequirementSchema = DataRequirementSchema;
module.exports.DataRequirement = DataRequirement;
