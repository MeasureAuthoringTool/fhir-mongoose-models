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

const ConsentProvisionActorSchema = BackboneElementSchemaFunction({
   role : CodeableConceptSchema,
   reference : ReferenceSchema,
   fhirTitle: { type: String, default: 'ConsentProvisionActor' },
});

class ConsentProvisionActor extends mongoose.Document {
  constructor(object) {
    super(object, ConsentProvisionActorSchema);
    this._type = 'FHIR::ConsentProvisionActor';
  }
};


module.exports.ConsentProvisionActorSchema = ConsentProvisionActorSchema;
module.exports.ConsentProvisionActor = ConsentProvisionActor;
