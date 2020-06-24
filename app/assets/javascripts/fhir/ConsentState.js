const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ConsentStateSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ConsentState' },
});

class ConsentState extends mongoose.Document {
  constructor(object) {
    super(object, ConsentStateSchema);
    this._type = 'FHIR::ConsentState';
  }
};


module.exports.ConsentStateSchema = ConsentStateSchema;
module.exports.ConsentState = ConsentState;
