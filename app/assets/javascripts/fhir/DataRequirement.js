const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DataRequirementCodeFilterSchema } = require('./allSchemaHeaders.js');
const { DataRequirementDateFilterSchema } = require('./allSchemaHeaders.js');
const { DataRequirementSortSchema } = require('./allSchemaHeaders.js');
const { ElementSchema } = require('./Element');
const { FHIRAllTypesSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { DataRequirementSchema } = require('./allSchemaHeaders.js');

DataRequirementSchema.add(ElementSchema);
DataRequirementSchema.remove('id');
DataRequirementSchema.add({
  type: FHIRAllTypesSchema,
  profile: [PrimitiveCanonicalSchema],
  subjectCodeableConcept: CodeableConceptSchema,
  subjectReference: ReferenceSchema,
  mustSupport: [PrimitiveStringSchema],
  codeFilter: [DataRequirementCodeFilterSchema],
  dateFilter: [DataRequirementDateFilterSchema],
  limit: PrimitivePositiveIntSchema,
  sort: [DataRequirementSortSchema],
});

module.exports.DataRequirementSchema = DataRequirementSchema;
