const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ResponseTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ResponseType' },
});

class ResponseType extends mongoose.Document {
  constructor(object) {
    super(object, ResponseTypeSchema);
    this._type = 'FHIR::ResponseType';
  }
};


module.exports.ResponseTypeSchema = ResponseTypeSchema;
module.exports.ResponseType = ResponseType;
