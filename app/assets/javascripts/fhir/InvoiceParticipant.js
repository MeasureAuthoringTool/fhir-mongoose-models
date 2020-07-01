const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');

const InvoiceParticipantSchema = BackboneElementSchemaFunction({
  role: CodeableConceptSchema,
  actor: ReferenceSchema,
  typeName: { type: String, default: 'InvoiceParticipant' },
  _type: { type: String, default: 'FHIR::InvoiceParticipant' },
});

class InvoiceParticipant extends mongoose.Document {
  constructor(object) {
    super(object, InvoiceParticipantSchema);
    this.typeName = 'InvoiceParticipant';
    this._type = 'FHIR::InvoiceParticipant';
  }
}

module.exports.InvoiceParticipantSchema = InvoiceParticipantSchema;
module.exports.InvoiceParticipant = InvoiceParticipant;
