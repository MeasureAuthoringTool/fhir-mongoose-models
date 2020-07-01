const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { NoteTypeSchema } = require('./NoteType');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const PaymentReconciliationProcessNoteSchema = BackboneElementSchemaFunction({
  type: NoteTypeSchema,
  text: PrimitiveStringSchema,
  typeName: { type: String, default: 'PaymentReconciliationProcessNote' },
  _type: { type: String, default: 'FHIR::PaymentReconciliationProcessNote' },
});

class PaymentReconciliationProcessNote extends mongoose.Document {
  constructor(object) {
    super(object, PaymentReconciliationProcessNoteSchema);
    this.typeName = 'PaymentReconciliationProcessNote';
    this._type = 'FHIR::PaymentReconciliationProcessNote';
  }
}

module.exports.PaymentReconciliationProcessNoteSchema = PaymentReconciliationProcessNoteSchema;
module.exports.PaymentReconciliationProcessNote = PaymentReconciliationProcessNote;
