const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { NoteTypeSchema } = require('./NoteType');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const PaymentReconciliationProcessNoteSchema = BackboneElementSchemaFunction({
   type : NoteTypeSchema,
   text : String,
   fhirTitle: { type: String, default: 'PaymentReconciliationProcessNote' },
});

class PaymentReconciliationProcessNote extends mongoose.Document {
  constructor(object) {
    super(object, PaymentReconciliationProcessNoteSchema);
    this._type = 'FHIR::PaymentReconciliationProcessNote';
  }
};


module.exports.PaymentReconciliationProcessNoteSchema = PaymentReconciliationProcessNoteSchema;
module.exports.PaymentReconciliationProcessNote = PaymentReconciliationProcessNote;
