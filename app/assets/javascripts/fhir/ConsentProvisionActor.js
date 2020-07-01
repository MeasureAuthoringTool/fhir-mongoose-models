const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');

const ConsentProvisionActorSchema = BackboneElementSchemaFunction({
  role: CodeableConceptSchema,
  reference: ReferenceSchema,
  typeName: { type: String, default: 'ConsentProvisionActor' },
  _type: { type: String, default: 'FHIR::ConsentProvisionActor' },
});

class ConsentProvisionActor extends mongoose.Document {
  constructor(object) {
    super(object, ConsentProvisionActorSchema);
    this.typeName = 'ConsentProvisionActor';
    this._type = 'FHIR::ConsentProvisionActor';
  }
}

module.exports.ConsentProvisionActorSchema = ConsentProvisionActorSchema;
module.exports.ConsentProvisionActor = ConsentProvisionActor;
