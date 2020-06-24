const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ConsentDataMeaningSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ConsentDataMeaning' },
});

class ConsentDataMeaning extends mongoose.Document {
  constructor(object) {
    super(object, ConsentDataMeaningSchema);
    this._type = 'FHIR::ConsentDataMeaning';
  }
};


module.exports.ConsentDataMeaningSchema = ConsentDataMeaningSchema;
module.exports.ConsentDataMeaning = ConsentDataMeaning;
