const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ContactDetailSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCodeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { PublicationStatusSchema } = require('./allSchemaHeaders.js');
const { ResourceTypeSchema } = require('./allSchemaHeaders.js');
const { SearchComparatorSchema } = require('./allSchemaHeaders.js');
const { SearchModifierCodeSchema } = require('./allSchemaHeaders.js');
const { SearchParameterComponentSchema } = require('./allSchemaHeaders.js');
const { SearchParamTypeSchema } = require('./allSchemaHeaders.js');
const { UsageContextSchema } = require('./allSchemaHeaders.js');
const { XPathUsageTypeSchema } = require('./allSchemaHeaders.js');
const { SearchParameterSchema } = require('./allSchemaHeaders.js');

SearchParameterSchema.add(DomainResourceSchema);
SearchParameterSchema.remove('id');
SearchParameterSchema.add({
  url: PrimitiveUriSchema,
  version: PrimitiveStringSchema,
  name: PrimitiveStringSchema,
  derivedFrom: PrimitiveCanonicalSchema,
  status: PublicationStatusSchema,
  experimental: PrimitiveBooleanSchema,
  date: PrimitiveDateTimeSchema,
  publisher: PrimitiveStringSchema,
  contact: [ContactDetailSchema],
  description: PrimitiveMarkdownSchema,
  useContext: [UsageContextSchema],
  jurisdiction: [CodeableConceptSchema],
  purpose: PrimitiveMarkdownSchema,
  code: PrimitiveCodeSchema,
  base: [ResourceTypeSchema],
  type: SearchParamTypeSchema,
  expression: PrimitiveStringSchema,
  xpath: PrimitiveStringSchema,
  xpathUsage: XPathUsageTypeSchema,
  target: [ResourceTypeSchema],
  multipleOr: PrimitiveBooleanSchema,
  multipleAnd: PrimitiveBooleanSchema,
  comparator: [SearchComparatorSchema],
  modifier: [SearchModifierCodeSchema],
  chain: [PrimitiveStringSchema],
  component: [SearchParameterComponentSchema],
});

module.exports.SearchParameterSchema = SearchParameterSchema;
