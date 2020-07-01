const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveCodeSchema } = require('./PrimitiveCode');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { ResourceTypeSchema } = require('./ResourceType');
const { SearchComparatorSchema } = require('./SearchComparator');
const { SearchModifierCodeSchema } = require('./SearchModifierCode');
const { SearchParameterComponentSchema } = require('./SearchParameterComponent');
const { SearchParamTypeSchema } = require('./SearchParamType');
const { UsageContextSchema } = require('./UsageContext');
const { XPathUsageTypeSchema } = require('./XPathUsageType');

const SearchParameterSchema = DomainResourceSchemaFunction({
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
  typeName: { type: String, default: 'SearchParameter' },
  _type: { type: String, default: 'FHIR::SearchParameter' },
});

class SearchParameter extends mongoose.Document {
  constructor(object) {
    super(object, SearchParameterSchema);
    this.typeName = 'SearchParameter';
    this._type = 'FHIR::SearchParameter';
  }
}

module.exports.SearchParameterSchema = SearchParameterSchema;
module.exports.SearchParameter = SearchParameter;
