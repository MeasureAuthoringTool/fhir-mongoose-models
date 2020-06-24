const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ConditionalReadStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ConditionalReadStatus' },
});

class ConditionalReadStatus extends mongoose.Document {
  constructor(object) {
    super(object, ConditionalReadStatusSchema);
    this._type = 'FHIR::ConditionalReadStatus';
  }
};


module.exports.ConditionalReadStatusSchema = ConditionalReadStatusSchema;
module.exports.ConditionalReadStatus = ConditionalReadStatus;
