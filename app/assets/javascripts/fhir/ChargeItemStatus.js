const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ChargeItemStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ChargeItemStatus' },
});

class ChargeItemStatus extends mongoose.Document {
  constructor(object) {
    super(object, ChargeItemStatusSchema);
    this._type = 'FHIR::ChargeItemStatus';
  }
};


module.exports.ChargeItemStatusSchema = ChargeItemStatusSchema;
module.exports.ChargeItemStatus = ChargeItemStatus;
