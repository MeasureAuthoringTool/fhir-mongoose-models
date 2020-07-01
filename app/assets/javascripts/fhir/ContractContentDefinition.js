const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContractPublicationStatusSchema } = require('./ContractPublicationStatus');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { ReferenceSchema } = require('./Reference');

const ContractContentDefinitionSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  subType: CodeableConceptSchema,
  publisher: ReferenceSchema,
  publicationDate: PrimitiveDateTimeSchema,
  publicationStatus: ContractPublicationStatusSchema,
  copyright: PrimitiveMarkdownSchema,
  typeName: { type: String, default: 'ContractContentDefinition' },
  _type: { type: String, default: 'FHIR::ContractContentDefinition' },
});

class ContractContentDefinition extends mongoose.Document {
  constructor(object) {
    super(object, ContractContentDefinitionSchema);
    this.typeName = 'ContractContentDefinition';
    this._type = 'FHIR::ContractContentDefinition';
  }
}

module.exports.ContractContentDefinitionSchema = ContractContentDefinitionSchema;
module.exports.ContractContentDefinition = ContractContentDefinition;
