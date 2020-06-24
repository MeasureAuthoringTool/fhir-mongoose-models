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

const ContractTermActionSubjectSchema = BackboneElementSchemaFunction({
   reference : [ReferenceSchema],
   role : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'ContractTermActionSubject' },
});

class ContractTermActionSubject extends mongoose.Document {
  constructor(object) {
    super(object, ContractTermActionSubjectSchema);
    this._type = 'FHIR::ContractTermActionSubject';
  }
};


module.exports.ContractTermActionSubjectSchema = ContractTermActionSubjectSchema;
module.exports.ContractTermActionSubject = ContractTermActionSubject;
