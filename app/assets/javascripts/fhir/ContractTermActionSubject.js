const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');

const ContractTermActionSubjectSchema = BackboneElementSchemaFunction({
  reference: [ReferenceSchema],
  role: CodeableConceptSchema,
  typeName: { type: String, default: 'ContractTermActionSubject' },
  _type: { type: String, default: 'FHIR::ContractTermActionSubject' },
});

class ContractTermActionSubject extends mongoose.Document {
  constructor(object) {
    super(object, ContractTermActionSubjectSchema);
    this.typeName = 'ContractTermActionSubject';
    this._type = 'FHIR::ContractTermActionSubject';
  }
}

module.exports.ContractTermActionSubjectSchema = ContractTermActionSubjectSchema;
module.exports.ContractTermActionSubject = ContractTermActionSubject;
