const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { NamingSystemTypeSchema } = require('./NamingSystemType');
const { NamingSystemUniqueIdSchema } = require('./NamingSystemUniqueId');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { UsageContextSchema } = require('./UsageContext');

const NamingSystemSchema = DomainResourceSchemaFunction({
  name: PrimitiveStringSchema,
  status: PublicationStatusSchema,
  kind: NamingSystemTypeSchema,
  date: PrimitiveDateTimeSchema,
  publisher: PrimitiveStringSchema,
  contact: [ContactDetailSchema],
  responsible: PrimitiveStringSchema,
  type: CodeableConceptSchema,
  description: PrimitiveMarkdownSchema,
  useContext: [UsageContextSchema],
  jurisdiction: [CodeableConceptSchema],
  usage: PrimitiveStringSchema,
  uniqueId: [NamingSystemUniqueIdSchema],
  typeName: { type: String, default: 'NamingSystem' },
  _type: { type: String, default: 'FHIR::NamingSystem' },
});

class NamingSystem extends mongoose.Document {
  constructor(object) {
    super(object, NamingSystemSchema);
    this.typeName = 'NamingSystem';
    this._type = 'FHIR::NamingSystem';
  }
}

module.exports.NamingSystemSchema = NamingSystemSchema;
module.exports.NamingSystem = NamingSystem;
