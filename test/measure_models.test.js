const mongoose = require('mongoose/browser');
const FHIR = require('./../app/assets/javascripts/AllDataElements')

describe('FHIR', () => {

  describe('Measure', () => {

    test("Element function", () => {
      let element = new FHIR.Element();
    });

    test('can construct a measure', () => {
      let measure = new FHIR.Measure({
        url: 'http://hl7.org/xyz',
        identifier: [new FHIR.Identifier({ system: 'system', value: 'Value' })],
        version: 'v2.1.023',
        name: 'TestMeasure001',
        title: 'CMS99v2',
        subtitle: 'TestMeasure001Subtitle',
        copyright: '©2020 CMS.gov',
        approvalDate: Date.today,
        lastReviewDate: Date.today,
      });
      let err = measure.validateSync();
      expect(err).toBeUndefined();
      expect(measure.identifier.length).toEqual(1);

      // mongoose
      // mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
      // const db = mongoose.connection;
      // db.on('error', console.error.bind(console, 'connection error:'));
      // db.once('open', function() {
      //   // we're connected!
      //
      //   // Save measure
      //   measure.save(function (err, measure) {
      //     if (err) return console.error(err);
      //     measure.validateSync();
      //   });
      //
      //   // Find measures
      //   FHIR.Measure.find(function (err, measures) {
      //     if (err) return console.error(err);
      //     console.log(measures);
      //   });
      //
      //   // Find measure by name
      //   FHIR.Measure.find({ name: /^TestMeasure001/ }, function (err, measures) {
      //     if (err) return console.error(err);
      //     console.log(measures);
      //   });
      // });
    });

  });

});
