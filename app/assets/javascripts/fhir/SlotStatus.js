const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SlotStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'SlotStatus' },
});

class SlotStatus extends mongoose.Document {
  constructor(object) {
    super(object, SlotStatusSchema);
    this._type = 'FHIR::SlotStatus';
  }
};


module.exports.SlotStatusSchema = SlotStatusSchema;
module.exports.SlotStatus = SlotStatus;
