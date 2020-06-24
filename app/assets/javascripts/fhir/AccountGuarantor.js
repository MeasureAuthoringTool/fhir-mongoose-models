const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const AccountGuarantorSchema = BackboneElementSchemaFunction({
   party : ReferenceSchema,
   onHold : Boolean,
   period : PeriodSchema,
   fhirTitle: { type: String, default: 'AccountGuarantor' },
});

class AccountGuarantor extends mongoose.Document {
  constructor(object) {
    super(object, AccountGuarantorSchema);
    this._type = 'FHIR::AccountGuarantor';
  }
};


module.exports.AccountGuarantorSchema = AccountGuarantorSchema;
module.exports.AccountGuarantor = AccountGuarantor;
