const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PeriodSchema } = require('./Period');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { ReferenceSchema } = require('./Reference');

const AccountGuarantorSchema = BackboneElementSchemaFunction({
  party: ReferenceSchema,
  onHold: PrimitiveBooleanSchema,
  period: PeriodSchema,
  typeName: { type: String, default: 'AccountGuarantor' },
  _type: { type: String, default: 'FHIR::AccountGuarantor' },
});

class AccountGuarantor extends mongoose.Document {
  constructor(object) {
    super(object, AccountGuarantorSchema);
    this.typeName = 'AccountGuarantor';
    this._type = 'FHIR::AccountGuarantor';
  }
}

module.exports.AccountGuarantorSchema = AccountGuarantorSchema;
module.exports.AccountGuarantor = AccountGuarantor;
