const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const InvoiceParticipantSchema = BackboneElementSchemaFunction({
   role : CodeableConceptSchema,
   actor : ReferenceSchema,
   fhirTitle: { type: String, default: 'InvoiceParticipant' },
});

class InvoiceParticipant extends mongoose.Document {
  constructor(object) {
    super(object, InvoiceParticipantSchema);
    this._type = 'FHIR::InvoiceParticipant';
  }
};


module.exports.InvoiceParticipantSchema = InvoiceParticipantSchema;
module.exports.InvoiceParticipant = InvoiceParticipant;
