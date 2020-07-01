const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveUriSchema } = require('./PrimitiveUri');

const ConsentPolicySchema = BackboneElementSchemaFunction({
  authority: PrimitiveUriSchema,
  uri: PrimitiveUriSchema,
  typeName: { type: String, default: 'ConsentPolicy' },
  _type: { type: String, default: 'FHIR::ConsentPolicy' },
});

class ConsentPolicy extends mongoose.Document {
  constructor(object) {
    super(object, ConsentPolicySchema);
    this.typeName = 'ConsentPolicy';
    this._type = 'FHIR::ConsentPolicy';
  }
}

module.exports.ConsentPolicySchema = ConsentPolicySchema;
module.exports.ConsentPolicy = ConsentPolicy;
