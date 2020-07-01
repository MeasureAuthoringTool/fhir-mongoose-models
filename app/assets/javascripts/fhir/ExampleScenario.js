const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { ExampleScenarioActorSchema } = require('./ExampleScenarioActor');
const { ExampleScenarioInstanceSchema } = require('./ExampleScenarioInstance');
const { ExampleScenarioProcessSchema } = require('./ExampleScenarioProcess');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { UsageContextSchema } = require('./UsageContext');

const ExampleScenarioSchema = DomainResourceSchemaFunction({
  url: PrimitiveUriSchema,
  identifier: [IdentifierSchema],
  version: PrimitiveStringSchema,
  name: PrimitiveStringSchema,
  status: PublicationStatusSchema,
  experimental: PrimitiveBooleanSchema,
  date: PrimitiveDateTimeSchema,
  publisher: PrimitiveStringSchema,
  contact: [ContactDetailSchema],
  useContext: [UsageContextSchema],
  jurisdiction: [CodeableConceptSchema],
  copyright: PrimitiveMarkdownSchema,
  purpose: PrimitiveMarkdownSchema,
  actor: [ExampleScenarioActorSchema],
  instance: [ExampleScenarioInstanceSchema],
  process: [ExampleScenarioProcessSchema],
  workflow: [PrimitiveCanonicalSchema],
  typeName: { type: String, default: 'ExampleScenario' },
  _type: { type: String, default: 'FHIR::ExampleScenario' },
});

class ExampleScenario extends mongoose.Document {
  constructor(object) {
    super(object, ExampleScenarioSchema);
    this.typeName = 'ExampleScenario';
    this._type = 'FHIR::ExampleScenario';
  }
}

module.exports.ExampleScenarioSchema = ExampleScenarioSchema;
module.exports.ExampleScenario = ExampleScenario;
