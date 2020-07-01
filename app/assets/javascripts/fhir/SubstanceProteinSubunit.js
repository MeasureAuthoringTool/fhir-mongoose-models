const mongoose = require('mongoose/browser');
const { AttachmentSchema } = require('./Attachment');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const SubstanceProteinSubunitSchema = BackboneElementSchemaFunction({
  subunit: PrimitiveIntegerSchema,
  sequence: PrimitiveStringSchema,
  length: PrimitiveIntegerSchema,
  sequenceAttachment: AttachmentSchema,
  nTerminalModificationId: IdentifierSchema,
  nTerminalModification: PrimitiveStringSchema,
  cTerminalModificationId: IdentifierSchema,
  cTerminalModification: PrimitiveStringSchema,
  typeName: { type: String, default: 'SubstanceProteinSubunit' },
  _type: { type: String, default: 'FHIR::SubstanceProteinSubunit' },
});

class SubstanceProteinSubunit extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceProteinSubunitSchema);
    this.typeName = 'SubstanceProteinSubunit';
    this._type = 'FHIR::SubstanceProteinSubunit';
  }
}

module.exports.SubstanceProteinSubunitSchema = SubstanceProteinSubunitSchema;
module.exports.SubstanceProteinSubunit = SubstanceProteinSubunit;
