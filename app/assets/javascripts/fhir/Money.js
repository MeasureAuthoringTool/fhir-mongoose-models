const mongoose = require('mongoose/browser');
const { CurrencyCodeSchema } = require('./CurrencyCode');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MoneySchema = ElementSchemaFunction({
   value : Number,
   currency : CurrencyCodeSchema,
   fhirTitle: { type: String, default: 'Money' },
});

class Money extends mongoose.Document {
  constructor(object) {
    super(object, MoneySchema);
    this._type = 'FHIR::Money';
  }
};


module.exports.MoneySchema = MoneySchema;
module.exports.Money = Money;
