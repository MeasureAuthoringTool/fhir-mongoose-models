const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ConditionalDeleteStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ConditionalDeleteStatus' },
});

class ConditionalDeleteStatus extends mongoose.Document {
  constructor(object) {
    super(object, ConditionalDeleteStatusSchema);
    this._type = 'FHIR::ConditionalDeleteStatus';
  }
};


module.exports.ConditionalDeleteStatusSchema = ConditionalDeleteStatusSchema;
module.exports.ConditionalDeleteStatus = ConditionalDeleteStatus;
